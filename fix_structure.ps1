# Create client directory if it doesn't exist
if (-not (Test-Path -Path "client")) {
    New-Item -ItemType Directory -Path "client"
}

# Move files and directories to client directory
$items = @(
    "components.json",
    "eslint.config.mjs",
    "next-env.d.ts",
    "next.config.js",
    "next.config.ts",
    "postcss.config.mjs",
    "public",
    "src",
    "tsconfig.json"
)

foreach ($item in $items) {
    if (Test-Path -Path $item) {
        Write-Host "Moving $item to client directory..."
        Move-Item -Path $item -Destination "client\$item" -Force
    }
}

# Copy package files from client to root if they don't exist
if (-not (Test-Path -Path "package.json") -and (Test-Path -Path "client\package.json")) {
    Copy-Item -Path "client\package.json" -Destination "."
}

if (-not (Test-Path -Path "package-lock.json") -and (Test-Path -Path "client\package-lock.json")) {
    Copy-Item -Path "client\package-lock.json" -Destination "."
}

Write-Host "Structure fixed successfully!"
