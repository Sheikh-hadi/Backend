import { AsyncHandler } from "../../utilis/AsyncHandler.js";
import { ApiError } from "../../utilis/ApError.js";
import { ApiResponse } from "../../utilis/ApiResponse.js";
import { InstrgamAutoReels } from "../../models/Instagram/instagramAutoReels.model.js";
const getAutoReelsData = AsyncHandler(async (req, res) => {
  const autoReels = await InstrgamAutoReels.find();
  if (!autoReels || autoReels.length === 0) {
    throw new ApiError(401, "No data available");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, autoReels, "Fetch data Sucessfullfy"));
});

export { getAutoReelsData };
