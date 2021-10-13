// Your code here
function saturdayFun(soundsFun){
if (soundsFun === undefined){
    soundsFun = "roller-skate"
}
    return "This Saturday, I want to " + soundsFun + "!";
}
// defines saturdayFun function declaration as specified + uses the default activity 'roller-skate' when no arguments are passed + permits the default activity to be overriden

const mondayWork = function(brightIdea){
    if (brightIdea===undefined){
        brightIdea = "go to the office"
    }
    return "This Monday, I will " + brightIdea + ".";
}
// defines mondayWork function expression as specified + uses the default activity 'go to the office' when no arguments are passed + permits the default activity to be overriden

function wrapAdjective(flair){
    if (flair===undefined){
        flair="*";}
            return function(special){
            if (special===undefined){
                special = "special";
                }
        return `You are ${flair}${special}${flair}!`
            }
     
        }
    
    
