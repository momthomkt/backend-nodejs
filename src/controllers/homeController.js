import db from '../models/index';
import CRUDService from '../services/CRUDServices';
class homeController {
    getHomePage = async (req, res) => {
        try {
            let data = await db.User.findAll();
            res.render('homepage.ejs', { data: JSON.stringify(data) });
        } catch (error) {
            console.log(error);
        }
    }
    getCrudPage = (req, res) => {
        res.render('crud');
    }
    handleSubmitForm = async (req, res) => {
        let message = await CRUDService.createNewUser(req.body);
        console.log(message);
        let data = req.body;
        res.send(data);
    }
}
module.exports = new homeController;
// let getHomePage = (req, res) => {
//     res.render('homepage.ejs');
// }
// module.exports = {
//     getHomePage
// }
