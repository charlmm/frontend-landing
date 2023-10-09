import React from "react";
import { Button } from "../../components/Button";
import { PropertyLWrapper } from "../../components/PropertyLWrapper";
import { PropertyLogoWoWrapper } from "../../components/PropertyLogoWoWrapper";
import { RightTopNav } from "../../components/RightTopNav";
import { ContentViewGallery } from "../../icons/ContentViewGallery";
import { Edit } from "../../icons/Edit";
import { Home } from "../../icons/Home";
import { Icons16PxRemoveRound2 } from "../../icons/Icons16PxRemoveRound2";
import { Icons24PxSearch1 } from "../../icons/Icons24PxSearch1";
import { Logo } from "../../icons/Logo";
import { MdiLogoutVariant } from "../../icons/MdiLogoutVariant";
import { Size20ThemeRegular4 } from "../../icons/Size20ThemeRegular4";
import { Size28ThemeRegular } from "../../icons/Size28ThemeRegular";
import { TextBulletListSquareEdit1 } from "../../icons/TextBulletListSquareEdit1";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-2">
            <div className="overlap-3">
              <img
                className="vector"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/65224f65895771eda12b6b6c/releases/652251dd3419821dd604bafa/img/vector-1583.svg"
              />
              <div className="group-2">
                <Button className="button-instance" property1="s" property2="primary" text="Create Content" />
                <div className="group-3">
                  <div className="overlap-group-2">
                    <img
                      className="akar-icons-coin"
                      alt="Akar icons coin"
                      src="https://cdn.animaapp.com/projects/65224f65895771eda12b6b6c/releases/652251dd3419821dd604bafa/img/akar-icons-coin.svg"
                    />
                    <div className="text-wrapper-2">20</div>
                  </div>
                </div>
                <div className="components-search">
                  <div className="text-icon">
                    <Icons24PxSearch1 className="icons-search" color="#463D61" />
                    <p className="enter-a-city-or-land">Search for templates, projects, etc</p>
                  </div>
                  <Icons16PxRemoveRound2 className="icons-remove" color="#EBEAEF" />
                  <img
                    className="filter-svgrepo-com"
                    alt="Filter svgrepo com"
                    src="https://cdn.animaapp.com/projects/65224f65895771eda12b6b6c/releases/652251dd3419821dd604bafa/img/filter-svgrepo-com-1.svg"
                  />
                </div>
              </div>
              <div className="side-nav">
                <div className="frame-3">
                  <div className="frame-4">
                    <div className="logo-wrapper">
                      <PropertyLogoWoWrapper icon={<Logo className="logo-instance" />} property1="collapsed" />
                    </div>
                    <div className="frame-5">
                      <Home className="home-instance" />
                      <div className="my-content">
                        <ContentViewGallery className="icon-instance-node" color="#4D4959" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-5">
                    <div className="settings">
                      <Size28ThemeRegular className="icon-instance-node" color="#4D4959" />
                    </div>
                    <MdiLogoutVariant className="mdi-logout-variant" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-board-full">
              <div className="overlap-4">
                <div className="text-wrapper-3">Hey James!</div>
                <p className="lets-create">Lets create something awesome today ✨💫</p>
                <PropertyLWrapper className="design-component-instance-node" property1="l" text="Start Creating" />
              </div>
              <div className="for-you-board">
                <div className="overlap-group-3">
                  <div className="rectangle-2" />
                  <div className="frame-6">
                    <div className="text-wrapper-4">Social media</div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="text-wrapper-5">Blog writng</div>
                          <p className="p">
                            Generate the best blog post to fit your audience with just few clicks of a button
                          </p>
                        </div>
                        <div className="frame-10">
                          <Edit className="icon-instance-node-2" color="#EA7E00" />
                          <Size20ThemeRegular4 className="arrow-trending" color="#9893A3" />
                        </div>
                      </div>
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="text-wrapper-5">Product description</div>
                          <p className="p">Instantly generate engaging product descriptions that sell</p>
                        </div>
                        <div className="frame-11">
                          <img
                            className="icon-instance-node-2"
                            alt="Basil edit outline"
                            src="https://cdn.animaapp.com/projects/65224f65895771eda12b6b6c/releases/652251dd3419821dd604bafa/img/basil-edit-outline.svg"
                          />
                          <Size20ThemeRegular4 className="arrow-trending" color="#9893A3" />
                        </div>
                      </div>
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="text-wrapper-5">Article writer</div>
                          <p className="p">Automatically create unique factual articles at the touch of a button</p>
                        </div>
                        <div className="frame-12">
                          <TextBulletListSquareEdit1
                            className="icon-instance-node-2"
                            color="url(#paint0_linear_1_1660)"
                          />
                          <Size20ThemeRegular4 className="arrow-trending" color="#9893A3" />
                        </div>
                      </div>
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="text-wrapper-5">Blog writng</div>
                          <p className="p">
                            Generate the best blog post to fit your audience with just few clicks of a button
                          </p>
                        </div>
                        <div className="frame-10">
                          <Edit className="icon-instance-node-2" color="#EA7E00" />
                          <Size20ThemeRegular4 className="arrow-trending" color="#9893A3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-13">
                    <div className="text-wrapper-4">Social media</div>
                    <div className="frame-7">
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="text-wrapper-5">Blog writng</div>
                          <p className="p">
                            Generate the best blog post to fit your audience with just few clicks of a button
                          </p>
                        </div>
                        <div className="frame-10">
                          <Edit className="icon-instance-node-2" color="#EA7E00" />
                          <Size20ThemeRegular4 className="arrow-trending" color="#9893A3" />
                        </div>
                      </div>
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="text-wrapper-5">Product description</div>
                          <p className="p">Instantly generate engaging product descriptions that sell</p>
                        </div>
                        <div className="frame-11">
                          <img
                            className="icon-instance-node-2"
                            alt="Basil edit outline"
                            src="https://cdn.animaapp.com/projects/65224f65895771eda12b6b6c/releases/652251dd3419821dd604bafa/img/basil-edit-outline.svg"
                          />
                          <Size20ThemeRegular4 className="arrow-trending" color="#9893A3" />
                        </div>
                      </div>
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="text-wrapper-5">Article writer</div>
                          <p className="p">Automatically create unique factual articles at the touch of a button</p>
                        </div>
                        <div className="frame-12">
                          <TextBulletListSquareEdit1
                            className="icon-instance-node-2"
                            color="url(#paint0_linear_1_1693)"
                          />
                          <Size20ThemeRegular4 className="arrow-trending" color="#9893A3" />
                        </div>
                      </div>
                      <div className="frame-8">
                        <div className="frame-9">
                          <div className="text-wrapper-5">Blog writng</div>
                          <p className="p">
                            Generate the best blog post to fit your audience with just few clicks of a button
                          </p>
                        </div>
                        <div className="frame-10">
                          <Edit className="icon-instance-node-2" color="#EA7E00" />
                          <Size20ThemeRegular4 className="arrow-trending" color="#9893A3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-14">
                <div className="text-wrapper-6">Most Popular Tools</div>
                <p className="text-wrapper-7">Explore the trending tools to create your copies fast</p>
              </div>
            </div>
          </div>
          <RightTopNav className="right-top-nav-instance" property1="default" />
        </div>
      </div>
    </div>
  );
};
