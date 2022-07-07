const baseUrl = "http://mis-sandbox.bluone.in/services/associate";

// --------------------------------List Associate Year-------------------------
export const getListAssociatByYear = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-associateYear`, requestOptions).then(
    (response) => response.json()
  );
};

// --------------------------------List Associate -------------------------
export const getListAssociat = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-avgratio`, requestOptions).then((response) =>
    response.json()
  );
};

// --------------------------------Gender-------------------------
export const getGender = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-gender`, requestOptions).then((response) =>
    response.json()
  );
};

// --------------------------------List Associate Months-------------------------

export const getListAssociatByMonth = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-associateMonth`, requestOptions).then(
    (response) => response.json()
  );
};

// --------------------------------Blood group-------------------------

export const getBloodGroup = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-bloodgroup`, requestOptions).then((response) =>
    response.json()
  );
};

// --------------------------------Department-------------------------

export const getDepartmentWise = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-departmentwiseassociate`, requestOptions).then(
    (response) => response.json()
  );
};
// ----------------------------------UpcomingEvent---------------------------------

export const getUpcomingWorkEvents = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-upcomingWevents`, requestOptions).then(
    (response) => response.json()
  );
};

// ----------------------------------UpcomingEvent---------------------------------

export const getUpcomingMaregeEvents = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-upcomingMevents`, requestOptions).then(
    (response) => response.json()
  );
};

// ----------------------------------UpcomingEvent---------------------------------

export const getupcomingBirthdayEvents = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-upcomingBevents`, requestOptions).then(
    (response) => response.json()
  );
};

// ----------------------------------UpcomingEvent---------------------------------

export const getUpcomingRelievingDay = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-relievingDay`, requestOptions).then((response) =>
    response.json()
  );
};

// ----------------------------------UpcomingEvent---------------------------------

export const getAllUpcomingEvents = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-allupcomingevents`, requestOptions).then(
    (response) => response.json()
  );
};

// ----------------------------------Get Gender Ratio---------------------------------

export const getGenderRatio = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: "Bearer my-token",
      //   "My-Custom-Header": "foobar",
    },
    body: JSON.stringify(payload),
  };

  return fetch(`${baseUrl}/get-ageandgender`, requestOptions).then((response) =>
    response.json()
  );
};
