$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/Features.feature");
formatter.feature({
  "name": "Testing intigral promotion API",
  "description": "Desciption : The purpose of these test is to validate json response of intigral promotion API.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Invalid API Key resonse",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Promotion API endpoint is running",
  "keyword": "Given "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.promotion_API_endpoint_is_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User makes a request with invalid API key",
  "keyword": "When "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.user_makes_a_request_with_invalid_API_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 403",
  "keyword": "Then "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.response_code_is(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.SecurityException: class \"org.hamcrest.Matchers\"\u0027s signer information does not match signer information of other classes in the same package\r\n\tat java.base/java.lang.ClassLoader.checkCerts(ClassLoader.java:1163)\r\n\tat java.base/java.lang.ClassLoader.preDefineClass(ClassLoader.java:905)\r\n\tat java.base/java.lang.ClassLoader.defineClass(ClassLoader.java:1014)\r\n\tat java.base/java.security.SecureClassLoader.defineClass(SecureClassLoader.java:151)\r\n\tat java.base/jdk.internal.loader.BuiltinClassLoader.defineClass(BuiltinClassLoader.java:825)\r\n\tat java.base/jdk.internal.loader.BuiltinClassLoader.findClassOnClassPathOrNull(BuiltinClassLoader.java:723)\r\n\tat java.base/jdk.internal.loader.BuiltinClassLoader.loadClassOrNull(BuiltinClassLoader.java:646)\r\n\tat java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:604)\r\n\tat java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:168)\r\n\tat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat apiStepdefinition.StepDefinitions.response_code_is(StepDefinitions.java:39)\r\n\tat ✽.response code is 403(classpath:features/Features.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "request id is not null",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.request_id_is_not_null()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "code is 8001",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.request_id_is_not_null(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "message is \"invalid api key\"",
  "keyword": "And "
});
formatter.match({
  "location": "apiStepdefinition.StepDefinitions.message_is_invalid_api_key(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});