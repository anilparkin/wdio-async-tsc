// import LoginPage from  '../../pageobjects/login.page';
// import SecurePage from '../../pageobjects/secure.page';
import axios  from 'axios';

// top-level await: Node >= v14.8.0 with ESM test file

// const tests: Array<any> = await new Promise(async (resolve) => {
//   const response = await axios.get("https://api.github.com/users", {
//     headers: {
//         Accept: "application/vnd.github.v3+json"
//     }
// });
//   resolve(response.data)
// });

// Test using top level await. Umcomment along with above test variable
// describe('add()', function() {
//   before(async () => {
//       browser.url("https://www.google.com/");
//   })
//   tests.forEach((d) => {
//     it(`correctly print details of ${d.login} args`, async function() {
//       console.log(d);
//     });
//   });
// });


//Regular Tests. Uncomment to check if WDIO setup successfully.
// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });


