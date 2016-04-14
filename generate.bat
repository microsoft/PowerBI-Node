pushd "%~dp0"
rm -rf client
AutoRest.exe -CodeGenerator NodeJS -Modeler Swagger -Input swagger.json -Namespace powerbi -output lib/client -name PowerBIClient -AddCredentials
popd
pause