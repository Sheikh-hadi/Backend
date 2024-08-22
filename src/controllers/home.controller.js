import { AsyncHandler } from "../utilis/AsyncHandler.js";
import { ApiError } from "../utilis/ApError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { Home } from "../models/home.model.js";

const getHomeData = AsyncHandler(async (req, res) => {
  const home = await Home.find();
  if (!home || home.length === 0) {
    throw new ApiError(401, "No data available");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, home, "Fetch data Sucessfullfy"));
});

const putHomeData = AsyncHandler(async (req, res) => {
  const data = req.body;
  const keys = Object.keys(data);
  console.log("keys: ", keys);
  console.log("data: ", data);

  // Ensure `data` is not empty
  if (keys.length === 0) {
    throw new ApiError(400, "No data provided");
  }

  // Check if any document contains at least one of the keys from `data`
  const result = await User.findOne({ keys }).limit(1);

  if (result) {
    console.log("The provided data exists in the collection.");

    // Update documents matching the criteria
    const updateResult = await User.updateMany({ ...data }, { $set: data });

    console.log(`Updated ${updateResult.modifiedCount} documents.`);

    return res
      .status(200) // Status 200 for successful update
      .json(new ApiResponse(200, updateResult, "Update Successful"));
  } else {
    throw new ApiError(404, "Data not found");
  }
});

export { getHomeData, putHomeData };
