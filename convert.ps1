
Write-Host "=== Notes Converter ===" -ForegroundColor Green

# Source and output folders
$sourceDir = "source_notes"
$outputDir = "_posts"

# Check source folder
if (-not (Test-Path $sourceDir)) {
    Write-Host "Error: Folder '$sourceDir' not found!" -ForegroundColor Red
    Write-Host "Create folder '$sourceDir' and put .md files there" -ForegroundColor Yellow
    exit
}

# Create output folder
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Name $outputDir -Force | Out-Null
}

# Get all .md files
$files = Get-ChildItem -Path $sourceDir -Filter "*.md"

if ($files.Count -eq 0) {
    Write-Host "No .md files in '$sourceDir'!" -ForegroundColor Red
    exit
}

Write-Host "Found files: $($files.Count)" -ForegroundColor Green

# Process each file
foreach ($file in $files) {
    Write-Host "`nFile: $($file.Name)" -ForegroundColor Cyan
    
    # Extract date from filename
    $dateMatch = [regex]::Match($file.Name, '^(\d{4})-(\d{2})-(\d{2})')
    if ($dateMatch.Success) {
        $date = "$($dateMatch.Groups[1].Value)-$($dateMatch.Groups[2].Value)-$($dateMatch.Groups[3].Value)"
    } else {
        $date = (Get-Date).ToString("yyyy-MM-dd")
        Write-Host "  Warning: Using current date" -ForegroundColor Yellow
    }
    
    # Create title from filename
    $title = $file.Name -replace '^\d{4}-\d{2}-\d{2}-', '' -replace '\.md$', ''
    $title = $title -replace '-', ' '
    
    # Read content
    try {
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    } catch {
        $content = Get-Content -Path $file.FullName -Raw
    }
    
    # Create new content with front matter
    $newContent = "---`n"
    $newContent += "layout: post`n"
    $newContent += "title: `"$title`"`n"
    $newContent += "date: $date 12:00:00 +0300`n"
    $newContent += "categories: [notes]`n"
    $newContent += "---`n`n"
    $newContent += $content
    
    # Save to output folder
    $outputPath = Join-Path $outputDir $file.Name
    $newContent | Out-File -FilePath $outputPath -Encoding UTF8
    
    Write-Host "  Saved to: $outputDir/$($file.Name)" -ForegroundColor Green
}

Write-Host "`n=== Done! ===" -ForegroundColor Green
Write-Host "Processed: $($files.Count) files" -ForegroundColor Yellow
Write-Host "Files in folder: $outputDir" -ForegroundColor Yellow
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Check files in _posts folder"
Write-Host "2. Edit categories if needed"
Write-Host "3. Run: bundle exec jekyll serve"
Write-Host "4. Open: http://localhost:4000"