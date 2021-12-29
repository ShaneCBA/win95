//https://win98icons.alexmeub.com/
export default function Icon(props)
{
    const generateUrl = (icon) =>
    {
        return require('./win95icons/'+icon+'.png')
    }
    return (
        <img src={generateUrl(props.icon)}/>
    )
}