import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function products(req, res) {
    try {
        const { accessToken } = await getAccessToken(req, res);
        const client = new BillingApiClient(accessToken);
        return client.getBillingInfo();
    } catch (error) {
        console.error(error)
        res.status(error.status || 500).end(error.message)
    }
});