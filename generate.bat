setlocal

set scriptfolder=%~dp0
set outfolder=%scriptfolder%lib\autorest
rmdir /s /q  %outfolder%
AutoRest.exe -CodeGenerator NodeJS -Modeler Swagger -Input swagger.json -Namespace powerbi -output %outfolder% -name PowerBIClient -AddCredentials true

endlocal
