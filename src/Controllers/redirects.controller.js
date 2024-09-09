import { URLModel } from '../model/url.model.js';

const redirectToLongUrl = async (req, res) => {
    const { urlCode } = req.params;

    try {
        const url = await URLModel.findOne({ urlCode });
        if (url) {
            return res.redirect(url.longUrl);
        }
        return res.status(404).json({ error: 'No URL found' });
    } catch (error) {
        console.error('Error redirecting:', error);
        res.status(500).json({ error: 'Failed to redirect' });
    }
};

export { redirectToLongUrl };
