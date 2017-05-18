        var rule = '-------------------------------------------------------';
        // goes from 1 to 25
        console.log('Printing 1 to 25 --------------------------');
        for (var i = 1; i <= 25; i++) {
            console.log(i);
        }
        console.log(rule);

        // goes from 25 to 1
        console.log('Printing 25 to 1 --------------------------');
        for (var i = 25; i >= 1; i--) {
            console.log(i);
        }
        console.log(rule);

        // goes from 1 to 50 by 2s
        console.log('Printing 1 to 50 by 2s --------------------------');
        for (var i = 1; i <= 50; i = i + 2) {
            console.log(i);
        }
        // 50 will not print because it's even.
        console.log(rule);

        // goes from 1 to 10 by .5
        console.log('Printing 1 to 10 by .5 --------------------------');
        for (var i = 1; i <= 10; i = i + 0.5) {
            // if (i === 4.5) {
            //     continue;
            // }
            console.log(i);
            // if (i === 9.0) {
            //     break;
            // }
        }