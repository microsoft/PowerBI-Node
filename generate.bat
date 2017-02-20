setlocal

set scriptfolder=%~dp0
set outfolder=%scriptfolder%lib\autorest
rmdir /s /q  %outfolder%
AutoRest.exe -CodeGenerator NodeJS -Modeler Swagger -Input swagger.json -Namespace powerbi -output %outfolder% -name PowerBIClient -AddCredentials true

echo "If ServiceClientCredentials is removed from lib/autorest/PowerBIClient.d.ts, revert this change. It is a bug in AutoRest"

endlocal

