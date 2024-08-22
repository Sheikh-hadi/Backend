import { AsyncHandler } from "../../utilis/AsyncHandler.js";
import { ApiError } from "../../utilis/ApError.js";
import { ApiResponse } from "../../utilis/ApiResponse.js";
import { InstrgamAutoLikes } from './../../models/Instagram/instagramAutoLikes.model.js';
const getAutoLikesData = AsyncHandler(async (req, res) => {
  const autoLikes = await InstrgamAutoLikes.find();
  if (!autoLikes || autoLikes.length === 0) {
    throw new ApiError(401, "No data available");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, autoLikes, "Fetch data Sucessfullfy"));
});

export { getAutoLikesData };
