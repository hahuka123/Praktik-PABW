const ALAMAT = "data/proyek.json";

async function muat(){
    const respons = await fetch(ALAMAT);
    console.log('Status:', respons.status, 'ok', respons.ok);
    if(!respons.ok){
        throw new Error('status', respons.status);
    }
    return respons.json();
}

muat();