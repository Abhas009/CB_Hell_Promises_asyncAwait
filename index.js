
function getdata(dataId)
{
    return new Promise((resolve,reject) => 
    {
        setTimeout(() =>
        {
            console.log("Data: " + dataId);
            resolve(200);
        },2000);
    })
}

//Async Await
async function data()
{
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
    await getdata(5);
    await getdata(6);
}
data();



//Promise Chain
console.log("getting data1 ....");

getData(1)
    .then((res) => {
        console.log("getting data2....");
        return getData(2);
    })
    .then((res) => {
        console.log("getting data3....");
        return getData(3);
    })
    .then((res) => {
        console.log(res); // Assuming getData(3) resolves with a value
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });



//callbackhell
getdata(1,() =>
{
    getdata(2,() =>
    {
        getdata(3,() =>
        {
            getdata(4);
        });
    });
});
