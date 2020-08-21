export default function Auction() {
    const buyers = {};

    return {
        register: function (user) {
            buyers[user.name] = user;
            console.log(buyers);
            user.room = this;
        }
    };

}
