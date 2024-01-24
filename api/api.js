import axios from 'axios';

const baseUrl = 'http://localhost:8080/mannit';

export async function loginUser(username, password, objectId) {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        objectId,
      }),
    });

    if (response.ok) {
      return { success: true, data: await response.json() };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.error };
    }
  } catch (error) {
    console.error('An error occurred while logging in', error.message);
    return { success: false, error: 'Network error' };
  }
}
// Pass objectId as a parameter to the fetchDataByPhoneNumber function
export async function fetchDataByPhoneNumber(objectId,phoneNumber) {
  try {
    const url = `${baseUrl}/eSearch?domain=healthcare&subdomain=clinic&userId=${objectId}&f=phonenumber_S eq ${phoneNumber}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
// Pass objectId as a parameter to the saveFormData function
export async function saveFormData(data, objectId) {
  try {
    const url = `${baseUrl}/eCreate?domain=healthcare&subdomain=clinic&userId=${objectId}`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
// Pass objectId as a parameter to the updateFormData function
export async function updateFormData(updatedData, userId, resourceId) {
  try {
    const url = `${baseUrl}/eUpdate?domain=healthcare&subdomain=clinic&userId=${userId}&resourceId=${resourceId}`;
    const response = await axios.put(url, updatedData);
    return { success: true, data: response.data };
  } catch (error) {
    throw error;
  }
}


export async function fetchDataForDate(objectId, formattedDate) {
  try {
    const apiUrl = `${baseUrl}/eSearch?domain=healthcare&subdomain=clinic&userId=${objectId}&f=createdated_D eq ${formattedDate} or createdated_D eq ''`;
    console.log('API URL:', apiUrl);

    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();

      if (Array.isArray(data.source)) {
        // Parse each stringified JSON object in the "source" array
        return data.source.map(jsonString => JSON.parse(jsonString));
      } else {
        console.error('Invalid response format:', data);
        throw new Error('Invalid response format');
      }
    } else {
      console.error('Failed to fetch data:', response.statusText);
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}