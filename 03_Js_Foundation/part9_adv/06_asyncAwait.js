function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Shabbir", url: "https://google.com" }); // RESOLVE
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log(`Fetching User Data....`);
    const userData = await fetchUserData(); // WE CAN ONLY USE AWAIT KEYWORD ONLY IN ASYNC
    console.log("User data fetched successfully ");
    console.log("User data :", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();

//---------------------------------------------------------------------------------

function fetchUserData_02() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "Shabbir", url: "https://google.com" }); //REJECT
    }, 3000);
  });
}

async function getUserData_02() {
  try {
    console.log(`Fetching User Data....`);
    const userData_02 = await fetchUserData_02(); // WE CAN ONLY USE AWAIT KEYWORD ONLY IN ASYNC
    console.log("User data fetched successfully ");
    console.log("User data :", userData_02);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData_02();
