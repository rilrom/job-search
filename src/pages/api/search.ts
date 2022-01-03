import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let vacancies = [
    {
      title: "Software Engineer",
    },
    {
      title: "Tech Lead",
    },
    {
      title: "UX Designer",
    },
  ];

  let found = vacancies.filter(
    (vacancy) => vacancy.title.toLowerCase().includes(req.body.keyword.toLowerCase())
  );

  if (found.length) {
    res.status(200).json(found);
  } else {
    return res.status(404).json({});
  }
};
