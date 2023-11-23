const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let ans = [];
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  ans.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    ans.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      ans.push(answer);
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) ",
        (answer) => {
          ans.push(answer);
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (answer) => {
              ans.push(answer);
              rl.question(
                "Which sport is your absolute favourite? ",
                (answer) => {
                  ans.push(answer);
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (answer) => {
                      ans.push(answer);
                      console.log(
                        `${ans[0]} loves listening to ${ans[2]} while ${ans[1]}, devouring ${ans[4]} for ${ans[3]}, prefers ${ans[5]} over any other sport, and is amazing at ${ans[6]}.`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
