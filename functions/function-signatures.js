        // function-signatures.js

        // Write and call a function that
        // has no inputs and no outputs
        function noInputNoOutput() {
            console.log('no input no output');
        }

        // has a String input and no output
        function stringInputNoOutput(someString) {
            console.log('string input no output - ' + someString);
        }

        // has no input and a String output
        function noInputStringOutput() {
            console.log('no input string output');
            return 'one string output'; // use this in the web page in console.log
            // console.log(noInputStringOutput() + ' came from noInputStringOutput()'
        }

        // has a String input and a String output
        function stringInputStringOutput(someString) {
            console.log('string input string output - ' + someString);
            return 'two string output';
        }

        // has two String inputs and a String output
        function twoStringInputsStringOutput(string1, string2) {
            console.log('two string inputs string output - ' + string1 + ' and ' + string2);
            return string1 + ' and ' + string2;
        }

        // allow no args, one arg, two args. Send a return value.
        function doAllFunctions(string1, string2) {
            // set up
            var s1 = string1 || 'default1';
            var s2 = string2 || 'default2';
            // body
            console.log('doAllFunctions(' + s1 + ", " + s2 + ')');
            // clean up and return
            return "returned: " + s1 + " and " + s2;
        }
        //---------------------------------- tests
        noInputNoOutput();
        stringInputNoOutput('a string');
        console.log(noInputStringOutput() + 'from noInputStringOutput()');
        console.log(stringInputStringOutput('another string') + ' from stringInputStringOutput()');
        console.log(twoStringInputsStringOutput('one more string', 'the last string') + ' from twoStringInputsStringOutput()');
        //------------------------------ tests for doAll
        doAllFunctions();
        doAllFunctions('a');
        doAllFunctions('a', 'b');
        console.log(doAllFunctions());