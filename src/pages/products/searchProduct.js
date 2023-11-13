export default function searchProduct () {
    const query = new URLSearchParams(window.location.search)
    const search = query.get("search")
    console.log("test",search)
    console.log("run code...");
    return(
        <div>
            halaman search
        </div>
    )
}