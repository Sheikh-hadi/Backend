import { AsyncHandler } from "../../utilis/AsyncHandler.js";
import { ApiError } from "../../utilis/ApError.js";
import { ApiResponse } from "../../utilis/ApiResponse.js";
import { InstagramFollower } from "./../../models/Instagram/instagramFollowers.model.js";

const getFollowerData = AsyncHandler(async (req, res) => {
  const follower = await InstagramFollower.find();
  if (!follower || follower.length === 0) {
    throw new ApiError(401, "No data available");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, follower, "Fetch data Sucessfullfy"));
});

export { getFollowerData };
