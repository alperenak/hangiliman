export function ConverData(data){

    return addClassName(editData(sortData(data)))

}



function sortData(data) {
    return data.sort((a, b) => { return (a.order - b.order) })
}





function editData(data) {

    let result = [{}, {}, {}]

    result[1] = data.filter(item => item.order === 1)[0]
    result[0] = data.filter(item => item.order === 2)[0]
    result[2] = data.filter(item => item.order === 3)[0]
    return result;
}






function addClassName(data) {

    let result = data

    result[0] = { ...result[0], className: "other-ports" }
    result[1] = { ...result[1], className: "first-port" }
    result[2] = { ...result[2], className: "other-ports" }

    return result

}