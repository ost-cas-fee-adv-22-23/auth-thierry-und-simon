
export const fetchProfile = async (accessToken: string) => {
    const url = `${process.env.ZITADEL_ISSUER}/oidc/v1/userinfo`
    try {
    const data = await fetch(url, {
        headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`
        }
    })
    return data.json()
} catch (error) {
    console.error(error)
}
}
