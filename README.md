# java-js-playground
Playground for various javascript related stuff

## Angular2 with support from SparkJava framework.
Just an implementation for Angular tutorial.

Project uses gradle and node plugin https://github.com/srs/gradle-node-plugin.
Angular project uses npm and ng-cli to build.
Frameworks are integrated by setting in .angular-cli.json output
directory and configuring this directory as resource directory (see build.gradle for details)
```
 "outDir": "../../../build/npmbuild/public",
```

## Prereq
```
$ npm install @angular/cli –g
```

## How to build
```
$ gradle build
```

## How to develop
```
For easier developing run 
```
ng build -w
```
ng-cli will constantly build your code and put into output directory.
java application can be run from IDE that understand gradle (like IntelliJ),
so it will put output directory into classpath for application, so sparkjava will
see new compiled js files.

Have fun!
