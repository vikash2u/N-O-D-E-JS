console.log('Hello World');
console.error('Oh, sorry, there is an error.');
console.time('label');
console.timeEnd("label");
process.stdout.write("123");process.stdout.write("456");
console.log("\033[31m This will be red");

/*
Formatting
One can use terminal (control) codes to issue specific commands like switching colors or positioning the cursor.
General
Effect Code
Reset \033[0m
Hicolor \033[1m
Underline \033[4m
Inverse \033[7m
Font Colors
Effect Code
Black \033[30m
Red \033[31m
Green \033[32m
Yellow \033[33m
Blue \033[34m
Magenta \033[35m
Cyan \033[36m
White \033[37m
Background Colors
Effect Code
Black \033[40m
Red \033[41m
Green \033[42m
Yellow \033[43m
Blue \033[44m
Magenta \033[45m
Cyan \033[46m
White \033[47m
    */