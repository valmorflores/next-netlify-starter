export default async (req, res) => {
    const result = await fetch('https://criativa.app/work/servers/sei1/gestorequipes/api/v1/version/0');
    const resultJson = await result.json();
    res.status(200).json(
        resultJson
    );
}