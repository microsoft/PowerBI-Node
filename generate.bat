pushd "%~dp0"
rm -rf client
AutoRest.exe -CodeGenerator NodeJS -Modeler Swagger -Input swagger.json -Namespace powerbi -output lib/autorest -name PowerBIClient -AddCredentials
popd
pause