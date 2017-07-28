setlocal

set scriptfolder=%~dp0
set outfolder=%scriptfolder%lib\autorest\V2
rmdir /s /q  %outfolder%
AutoRest -CodeGenerator NodeJS -Input https://raw.githubusercontent.com/Microsoft/powerbi-rest-api-specs/master/swaggerV2.json -Namespace powerbi -output %outfolder% -name PowerBIClient -AddCredentials true

echo "If ServiceClientCredentials is removed from lib/autorest/PowerBIClient.d.ts, revert this change. It is a bug in AutoRest"

endlocal

