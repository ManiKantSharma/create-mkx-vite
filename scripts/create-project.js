#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import prompts from "prompts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createProject() {
  console.log(
    "🚀 Welcome to Vite + React + TypeScript + Tailwind CSS 4 Boilerplate! 🚀"
  );

  const response = await prompts([
    {
      type: "text",
      name: "projectName",
      message:
        "What is your project name? (Don't worry, it's not as hard as naming your children)",
      initial: "my-vite-app",
      validate: (value) =>
        value.trim() === ""
          ? "Project name is required, but don't worry, it's not a life sentence"
          : true,
    },
    {
      type: "confirm",
      name: "installDeps",
      message:
        "Install dependencies after creating project? (You know you need them, but it's like buying groceries for the week)",
      initial: true,
    },
  ]);

  if (!response.projectName) {
    console.log(
      "❌ Project creation cancelled. Don't worry, it's not a failure, it's just a minor setback"
    );
    process.exit(1);
  }

  const projectPath = path.resolve(process.cwd(), response.projectName);
  const templatePath = path.resolve(__dirname, "../template");

  try {
    if (await fs.pathExists(projectPath)) {
      console.error(
        `❌ Directory ${response.projectName} already exists! Looks like someone beat you to it`
      );
      process.exit(1);
    }

    console.log(
      "🚧 Creating project directory... This might take a few seconds, but it's like waiting for your coffee to brew"
    );
    await fs.copy(templatePath, projectPath);

    const packageJsonPath = path.join(projectPath, "package.json");
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = response.projectName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    console.log(
      "✅ Project created successfully! You did it! Now go celebrate with a cookie or two"
    );
    console.log(`🚪 Project location: ${projectPath}`);

    if (response.installDeps) {
      console.log(
        "🚚 Installing dependencies... This might take a bit, but it's like waiting for your favorite TV show to download"
      );
      const { spawn } = await import("child_process");

      const installProcess = spawn("npm", ["install"], {
        cwd: projectPath,
        stdio: "inherit",
      });

      installProcess.on("close", (code) => {
        if (code === 0) {
          console.log(
            "✅ Dependencies installed successfully! Now you can finally start coding"
          );
          printNextSteps(response.projectName);
        } else {
          console.log(
            "⚠️  Failed to install dependencies. You can install them manually with: (Don't worry, it's not as painful as it sounds)"
          );
          console.log(`   cd ${response.projectName}`);
          console.log("   npm install");
          printNextSteps(response.projectName);
        }
      });
    } else {
      console.log(
        "⚠️  Don't forget to install dependencies: (It's like remembering to water your plants)"
      );
      console.log(`   cd ${response.projectName}`);
      console.log("   npm install");
      printNextSteps(response.projectName);
    }
  } catch (error) {
    console.error("❌ Error creating project:", error.message);
    process.exit(1);
  }
}

function printNextSteps(projectName) {
  console.log("\n📜 Behold, your next legendary quests await:");
  console.log(`   📂 cd ${projectName}`);
  console.log("   🧙‍♂️ npm run dev       - Summon the dev server");
  console.log(
    "   🏗️ npm run build     - Prepare your masterpiece for the world"
  );
  console.log("   🧹 npm run lint      - Keep your code as clean as your soul");
  console.log("   🔍 npm run preview   - Gaze upon the production build");

  console.log(
    "\n🚀 May your bugs be few and your commits legendary. Happy coding!\n"
  );
}

createProject().catch(console.error);
