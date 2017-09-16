cd "%~dp0"
cd ".."

xcopy /s /y ..\libraries\d3\d3.d.ts source\libraries\d3\d3.d.ts
xcopy /s /y ..\jpv-common\builds\jpv-common.d.ts source\libraries\jpv-common\jpv-common.d.ts

PAUSE
