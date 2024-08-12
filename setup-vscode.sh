#!/bin/bash

# Install necessary VSCode extensions
echo "Installing VSCode extensions..."
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension angular.ng-template             # Angular Language Service
code --install-extension github.copilot                  # GitHub Copilot
code --install-extension ecmel.vscode-html-css           # HTML CSS Support
code --install-extension esbenp.prettier-vscode          # Prettier
code --install-extension dbaeumer.vscode-eslint          # ESLint
code --install-extension pkief.material-icon-theme       # Material Icon Theme
# Copy VSCode settings
echo "Copying VSCode settings..."
# Create the settings directory if it doesn't exist
mkdir -p ~/.config/Code/User/

# Copy your settings.json to the user's VSCode settings directory
cp .vscode/settings.json ~/.config/Code/User/settings.json

echo "VSCode setup complete!"
