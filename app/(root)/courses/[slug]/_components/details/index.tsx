import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DETAILS from "@/data/course-details.json"
import Image from "next/image"
import RatingSummary from "./rating-summery"
import CheckedFillIcon from "@/svgs/Style=Filled-2.svg"
import VideoCam from "@/svgs/video-cam.svg";
import RatingStar from "@/svgs/Style=Filled-1.svg"

export default function Details() {
  return (
    <section>
      <div className="section-container py-15.5">
        <div className="w-full max-w-180">
          <Tabs defaultValue={DETAILS.tabs[0].value}>
            <TabsList>
              {DETAILS.tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContents className="mt-10">
              <TabsContent value="about">
                <h4 className="heading-xs text-neutral-950">Description</h4>
                <p className="mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.about.description}
                </p>

                <h4 className="mt-6 heading-xs text-neutral-950">Sneak Peak</h4>
                <div className="flex items-center gap-4 overflow-x-auto pt-6">
                  {DETAILS.about.sneakPeak.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt="Sneak Peak"
                      width={400}
                      height={300}
                    />
                  ))}
                </div>

                <h4 className="mt-6 heading-xs text-neutral-950">Key Points</h4>
                <ul className="mt-6 list-inside space-y-2 text-neutral-700">
                  {DETAILS.about.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-2 body-m">
                      <CheckedFillIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="lessons">
                <h4 className="heading-xs text-neutral-950">
                  Explore the Modules
                </h4>
                <p className="mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.lesson.description}
                </p>

                <h4 className="mt-6 heading-xs text-neutral-950">
                  Lesson List
                </h4>
                <div className="mt-6 space-y-4">
                  {DETAILS.lesson.lesson_list.map((lesson, index) => (
                    <div key={index} className="flex items-start gap-3.25">
                      <div className="w-fit rounded-[24px] bg-secondary p-4">
                        <VideoCam wrapper="span" />
                      </div>
                      <div>
                        <h2 className="label-m text-neutral-950">
                          {lesson.title}
                        </h2>
                        <p className="body-m text-neutral-700">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="mt-6 heading-xs text-neutral-950">
                  Lesson Content
                </h4>
                <p className="mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.lesson.content}
                </p>

                <h4 className="mt-6 heading-xs text-neutral-950">
                  Lesson Progress Tracking
                </h4>
                <p className="mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.lesson.tracking}
                </p>

                <div className="mt-6 w-full space-y-2 rounded-[16px] border p-4">
                  <p className="label-s text-neutral-950">Learning Progress</p>
                  <h6 className="heading-s text-neutral-950">
                    {DETAILS.lesson.progress}%
                  </h6>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-secondary-400"
                      style={{ width: `${DETAILS.lesson.progress}%` }}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <h4 className="heading-xs text-neutral-950">
                  {DETAILS.review.sectionTitle}
                </h4>
                <p className="mt-6 body-m whitespace-pre-line text-neutral-700">
                  {DETAILS.review.sectionDescription}
                </p>

                <RatingSummary ratingData={DETAILS.review.ratingSummary} />

                <h4 className="mt-6 heading-xs text-neutral-950">
                  Individual Reviews:
                </h4>

                <Tabs
                  defaultValue={DETAILS.review.rating_tabs[0].value}
                  className="mt-6"
                >
                  <TabsList>
                    {DETAILS.review.rating_tabs.map((rating, index) => (
                      <TabsTrigger key={rating.value} value={rating.value}>
                        {index !== 0 && <RatingStar className="size-6" />}
                        <span>{rating.label}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <TabsContents
                    className="mt-10"
                    defaultValue={DETAILS.review.rating_tabs[0].value}
                  >
                    {DETAILS.review.rating_tabs.map((rating) => (
                      <TabsContent key={rating.value} value={rating.value} className="pb-6">
                        {DETAILS.review.individualReviews.map(
                          (review, index) => (
                            <div
                              key={index}
                              className="mt-6 w-full rounded-[24px] border p-10"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                  <Avatar className="size-13">
                                    <AvatarImage src="/images/profile.svg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>

                                  <div>
                                    <p className="label-l text-neutral-950">
                                      {review.name}
                                    </p>
                                    <p className="body-m text-neutral-700">
                                      {review.role}
                                    </p>
                                  </div>
                                </div>

                                <p>{review.timeAgo}</p>
                              </div>

                              <div className="mt-6 flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <RatingStar key={i} />
                                ))}
                              </div>

                              <p className="mt-6 body-m text-neutral-700">
                                {review.review}
                              </p>
                            </div>
                          )
                        )}
                      </TabsContent>
                    ))}
                  </TabsContents>
                </Tabs>
              </TabsContent>
            </TabsContents>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
