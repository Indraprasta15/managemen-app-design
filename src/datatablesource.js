export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="" />
                    {params.row.username}
                </div>

            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 230
    },
    {
        field: "age",
        headerName: "Age",
        width: 100
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className= {`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]

//temporary data

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "snow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "passive",
        email: "1snow@gmail.com",
        age: 36
    },
    {
        id: 3,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "2snow@gmail.com",
        age: 30
    },
    {
        id: 4,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "passive",
        email: "3snow@gmail.com",
        age: 33
    },
    {
        id: 5,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "4snow@gmail.com",
        age: 40
    },
    {
        id: 6,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "6snow@gmail.com",
        age: 29
    },
    {
        id: 7,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "passive",
        email: "7snow@gmail.com",
        age: 28
    },
    {
        id: 8,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "8snow@gmail.com",
        age: 35
    },
    {
        id: 9,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "9snow@gmail.com",
        age: 31
    },
    {
        id: 10,
        username: "Snow",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "10snow@gmail.com",
        age: 34
    },
]