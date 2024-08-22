import { InstrgamLikes } from "../../models/Instagram/instgramLikes.model.js";
import { ApiError } from "../../utilis/ApError.js";
import { ApiResponse } from "../../utilis/ApiResponse.js";
import { AsyncHandler } from "../../utilis/AsyncHandler.js";

const getLikes = AsyncHandler(async (req, res) => {
    const likes = await InstrgamLikes.find();
    if (!likes || likes.length === 0) {
      throw new ApiError(401, "No data available");
    }
  
    return res
      .status(201)
      .json(new ApiResponse(200, likes, "Fetch data Sucessfullfy"));
});

export { getLikes };
