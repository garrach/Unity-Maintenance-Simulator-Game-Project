import { moveObject } from './dragAndDrop.cjs';

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
        throw error;
    }
};
const instantiatePlaces = (arr) => {
    const placeSP = document.querySelector('.place');
    placeSP.innerHTML = '';
    arr.forEach((element, index) => {
        const place = document.createElement('span');
        place.setAttribute('title', "Device:" + element.name);
        place.classList.add('placement');
        const vector3 = {
            position: {
                x: Number(element.position.x),
                y: Number(element.position.y),
                z: Number(element.position.z),
            }
        };

        const Intvector3 = {
            position: {
                x: Math.floor(Number(element.position.x)),
                y: Math.floor(Number(element.position.y)),
                z: Math.floor(Number(element.position.z)),
            }
        };

        const color = "rgb(" + (225 - Intvector3.position.x) + "," + (225 - Intvector3.position.y) + "," + (225 - Intvector3.position.z) + ")";

        place.setAttribute('style', "right: " + vector3.position.x +"rem; top: " + vector3.position.z+ "rem; background: " + color + ";");
        placeSP.append(place);
    });
};
const instantiatePlaces2 = async (socket) => {
    const arr=[];
    const elements=[];
    const jsonUrl = '../spawn.json';
    console.log('retrive from json')
    try {
        const data = await fetchData(jsonUrl);
        const placeSP = document.querySelector('.place');
        placeSP.innerHTML = '';  
        data.data.devicesSp.forEach((element, index) => {
            const place = document.createElement('span');
            const vector3 = {
                name:element.name,
                position: {
                    x: (element.position.x),
                    y: (element.position.y),
                    z: (element.position.z),
                }
            };
            const Intvector3 = {
                position: {
                    x: (element.position.x),
                    y: (element.position.y),
                    z: (element.position.z),
                }
            };
            arr.push(vector3);
            elements.push(place);
            moveObject(place,socket);
            
            place.setAttribute('value', JSON.stringify({ data: vector3 }));
            place.setAttribute('title', 'Device:' + element.name);
            const color = "rgb(" + (225 - vector3.position.x) + "," + (225 - vector3.position.y) + "," + (225 - vector3.position.z) + ")";
            place.classList.add('placement');

            console.log(Intvector3.position.y)


            place.setAttribute('style', "right:" + (30 - vector3.position.x * 20) +
                "rem; top:" + (10 - vector3.position.z * 10) + "rem; background:" + color + ";");
            placeSP.append(place);
        });
    } catch (error) {
        console.log(error);
    }
    return {arr:arr,elements:elements};
};
export {instantiatePlaces,instantiatePlaces2}