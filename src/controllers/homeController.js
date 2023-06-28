import db from '../models/index';
class homeController {
    getHomePage = async (req, res) => {
        try {
            let data = await db.User.findAll();
            res.render('homepage.ejs', { data: JSON.stringify(data) });
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new homeController;
// let getHomePage = (req, res) => {
//     res.render('homepage.ejs');
// }
// module.exports = {
//     getHomePage
// }
