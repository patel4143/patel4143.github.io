
function array1()
{
    var words = [];
        words.push(document.madWords.noun1.value);
        words.push(document.madWords.noun2.value);
        words.push(document.madWords.color1.value);
        words.push(document.madWords.bodypart.value);
        words.push(document.madWords.verb1.value);
        words.push(document.madWords.food1.value);
        words.push(document.madWords.object1.value);
        words.push(document.madWords.adjective1.value);
        words.push(document.madWords.color2.value);
        words.push(document.madWords.verb2.value);

    return " There once was a " + words[0].bold() + " named " + words[1].bold() + " . " + words[1].bold() + " had " + words[2].bold() + " eyes and didn't have a(n) "
        + words[3].bold() + ". " +'<br>' +  words[1].bold() + " liked to "+ words[4].bold() + " while eating " + words[5].bold() + ". " +
        words[1].bold() + " saw a deranged duck on the loose and decided to try to capture the duck with an " + words[6].bold() + '<br>' + " that had googly eyes on it." +
        " The duck was " + words[7].bold() + " and had " + words[8].bold() + " eyes. " + words[1].bold() + " hit the duck and the duck " + words[9].bold() + " and died."
}

