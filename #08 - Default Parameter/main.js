/*

Default parameters

*/

    //OLD WAY
function showInfo(username,role,theme){


    // username = username === undefined ? 'default username' :username ;
    // role     = role     === undefined ? 'default role '    :role  ;
    // theme    = theme    === undefined ? 'default theme'    :theme ;


    username = username || 'default username';
    role     = role     || 'default role';
    theme    = theme    || 'default theme';

    return `Hello Mr mehdi your user name is ${username} and your role is ${role} and your favorite theme is ${theme}`

}

console.log(showInfo());
console.log(showInfo('Mhdcasa'));
console.log(showInfo('Mhdcasa', 'admin'));
console.log(showInfo('Mhdcasa', 'admin', 'yellow'));



console.log('==============================NEW WAY==============================')

    //NEW WAY
    function showInfoTwo(username = 'default username',role='default role',theme='default theme'){

        return `Hello Mr mehdi your user name is ${username} and your role is ${role} and your favorite theme is ${theme}`
    
    }
    
    console.log(showInfoTwo());
    console.log(showInfoTwo('Mhdcasa'));
    console.log(showInfoTwo('Mhdcasa', 'admin'));
    console.log(showInfoTwo('Mhdcasa', 'admin', 'yellow'));
