import { AsyncHandler } from "../utilis/AsyncHandler.js";
import { ApiError } from "../utilis/ApError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { About } from './../models/about.model.js';

const getAboutData = AsyncHandler(async (req, res) => {
  const about = await About.find();
  if (!about || about.length === 0) {
    throw new ApiError(401, "No data available");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, about, "Fetch data Sucessfullfy"));
});

export { getAboutData };