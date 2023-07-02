


export function formatPostDate(inputDate: string){
    const dateObj = new Date(inputDate);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
    });

    return formattedDate.replace(",", "")
}