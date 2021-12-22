import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  let vacancies = [
    {
      title: "Job",
    },
  ];

  let found = vacancies.filter(
    (vacancy) => req.body.keyword.toLowerCase() === vacancy.title.toLowerCase()
  );

  if (found.length) {
    res.status(200).json(found);
  } else {
    return res.status(404).json({});
  }
};
