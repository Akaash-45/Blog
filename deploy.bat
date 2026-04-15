@echo off
echo.
echo ========================================
echo   Deploying Akash Ananthula Blog
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing git repository...
    git init
    echo Git initialized successfully!
) else (
    echo Git already initialized
)

echo.
echo Adding files to git...
git add .

echo.
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update blog

echo.
echo Committing changes...
git commit -m "%commit_msg%"

echo.
echo Checking for remote repository...
git remote | findstr "origin" >nul
if %errorlevel% equ 0 (
    echo Pushing to existing repository...
    git push origin main
) else (
    echo.
    echo No remote repository found.
    echo.
    echo Please create a repository on GitHub first, then run:
    echo.
    echo git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    echo git branch -M main
    echo git push -u origin main
    echo.
    echo Then enable GitHub Pages in repository Settings ^> Pages
)

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Go to your GitHub repository
echo 2. Click Settings ^> Pages
echo 3. Select 'main' branch as source
echo 4. Your site will be live at:
echo    https://YOUR_USERNAME.github.io/YOUR_REPO/
echo.
echo Add this link to your resume!
echo.
pause
