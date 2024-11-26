import { z } from "zod";

const userSchema = z.object({
  username: z.string().max(15),
  email: z.string().email(),
  password: z.string.min(8).max(17),
});

export default userSchema;
