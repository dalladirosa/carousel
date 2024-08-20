import ArrowRight from '@/icons/arrow-right';
import Lock from '@/icons/lock';
import { ExternalLink } from 'lucide-react';
import React from 'react';

const SecuritySection = () => {
  return (
    <section className="container w-full px-6 lg:px-8">
      <div className="flex flex-col gap-10 px-0 py-10 lg:flex-row lg:p-10">
        <div className="flex flex-shrink-0 flex-col">
          <div className="mx-auto w-fit overflow-auto rounded-full bg-gradient-to-br from-[#9D71FF]/30 to-[#4B78EC]/30 p-[1px] lg:mx-0">
            <div className="flex flex-row items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-sm font-bold text-purple-70">
              <Lock width={16} height={16} />
              Security
            </div>
          </div>
          <p className="mt-2 text-center text-3xl text-gray-990 lg:text-left lg:text-5xl">
            Your Data’s{' '}
            <b className="text-primary-purple-70">
              Safety <br /> and Security
            </b>{' '}
            is <br /> Our Top Priority
          </p>
          <div className="mx-auto mt-6 flex flex-row items-center gap-2 lg:mx-0">
            <span className="text-lg font-bold text-primary-purple-70">
              Get in Touch
            </span>{' '}
            <ArrowRight />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 rounded-3xl border border-white bg-gray-100 p-6 lg:flex-row lg:px-6 lg:py-10">
            <div className="flex min-w-[157px] flex-col items-center">
              <p className="text-6xl font-bold text-primary-purple-60">100%</p>
              <p className="text-sm text-primary-purple-50">
                On-premise options
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">On-Premise Solutions</p>
              <p className="text-sm">
                Wherever possible, we build and maintain solutions hosted
                entirely on-premise, giving you complete control over your data
                environment.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white bg-gray-100 p-6 lg:flex-row lg:px-6 lg:py-10">
            <div className="flex min-w-[157px] flex-col items-center">
              <p className="text-6xl font-bold text-primary-purple-60">24/7</p>
              <p className="text-sm text-primary-purple-50">Monitoring</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Strong Cloud Security</p>
              <div className="text-sm">
                For our cloud-hosted solutions, we implement industry-leading
                security protocols:
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Data Encryption: Your data is encrypted at rest and in
                    transit using TLS 1.2 and AES-256.
                  </li>{' '}
                  <li>
                    Access Management: We enforce strict access controls with
                    minimal privilege policies on all cloud database & server
                    instances.
                  </li>
                </ul>
                24/7 Monitoring: Our systems are continuously monitored with
                rapid incident response to address any potential threats.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white bg-gray-100 p-6 lg:flex-row lg:px-6 lg:py-10">
            <div className="flex min-w-[157px] flex-col items-center">
              <p className="text-6xl font-bold text-primary-purple-60">SOC2</p>
              <p className="text-sm text-primary-purple-50">Type II</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">
                Rigorous Testing and Compliance
              </p>
              <p className="text-sm">
                We regularly conduct penetration testing and are undergoing a
                SOC 2 Type II audit. We can provide an engagement letter from
                our auditor upon request. Visit our Trust Center to see the
                standards and controls we are meeting in real-time.
              </p>
              <a className="flex flex-row items-center gap-2" href="#">
                <span className="text-sm font-bold text-primary-purple-70">
                  Visit Trust Center
                </span>
                <ExternalLink
                  strokeWidth={2}
                  className="stroke-primary-purple-60"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
