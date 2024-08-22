// GET homepage

exports.homepage = async (req, res) => {
    const locals = {
        title: "Notes",
        description: "Free Notes App.",
    }

    res.render('index', locals);
}

// GET about

exports.about = async (req, res) => {
    const locals = {
        title: "About - Notes",
        description: "Free Notes App.",
    }

    res.render('about', locals);
}

// GET account

exports.account = async (req, res) => {
    const locals = {
        title: "Account - Notes",
        description: "Free Notes App.",
    }

    res.render('account', locals);
}
