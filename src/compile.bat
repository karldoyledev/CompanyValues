del *.js
dir *.ts /b /s > files.txt
rem tsc @files.txt --module amd --out ./output.bundle.js --removeComments
tsc @files.txt --module system --out ./output.bundle.js --removeComments
del files.txt

rem https://www.calculateme.com/length/nanometers/to-miles/